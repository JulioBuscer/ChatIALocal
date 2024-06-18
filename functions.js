import { CreateWebWorkerMLCEngine } from "https://esm.run/@mlc-ai/web-llm"

import { model_list } from "./models.js"

//const SELECTED_MODEL = 'gemma-2b-it-q4f32_1-MLC'
let SELECTED_MODEL = 'TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC'

const $ = el => document.querySelector(el)

const $select_model = document.getElementById('selected_model')

const $form = $('form')
const $input = $('#input')
const $template = $('#template-message')
const $messages = $('ul')
const $container = $('main')
const $info = $('small')
const $button = $('button')
const WORKER = new Worker('/worker.js', { type: 'module' })
let messages = []
let engine

const MODELS = model_list

MODELS.forEach(model => {
    const option = document.createElement('option');
    option.value = model.model_id;
    option.text = `${model.model_id} [${model.vram_required_MB} MB]`;
    $select_model.appendChild(option);
});

$select_model?.addEventListener(
    "change",
    async function () {

        $button.disabled = true

        if ($select_model.value != null && $select_model.value != "") {
            if ($select_model.classList.contains('pulse')) {
                $select_model.classList.remove('pulse')
            }

            engine = await CreateWebWorkerMLCEngine(
                WORKER,
                $select_model.value,
                {
                    initProgressCallback: (info) => {
                        //console.log('initProgressCallback', info)
                        $info.textContent = `${info.text}`
                        if (info.progress == 1) {
                            $button.disabled = false
                        }
                    }
                }
            )
        } else {
            return alert("Selecciona una IA para chatear")
        }
    }
)

$form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const messageText = $input.value.trim()

    if (messageText != '') {
        $input.value = ''
    } else {
        return alert("Ingresa alguna preguna porfavor")
    }

    addMessage(messageText, 'user')
    $button.setAttribute('disabled', true)

    const userMessages = {
        role: 'user'
        , content: messageText
    }
    messages.push(userMessages)

    const chunks = await engine.chat.completions.create({
        messages,
        stream: true
    }
    )
    let reply = ""

    const $botMessage = addMessage("", 'bot')
    const $load = document.querySelector('.loader')
    for await (const chunk of chunks) {
        const [choice] = chunk.choices
        const content = choice?.delta?.content ?? ""
        if (reply != "") {
            $load.remove()
        }
        reply += content

        $botMessage.textContent = reply
        $container.scrollTop = $container.scrollHeight
    }

    messages.push({
        role: 'assistant',
        content: reply
    })
    $button.removeAttribute('disabled')
})


function addMessage(text, sender) {
    const clonedTemplate = $template.content.cloneNode(true)

    const $newMessage = clonedTemplate.querySelector('.message')

    const $who = $newMessage.querySelector('span')
    const $text = $newMessage.querySelector('p')
    const $load = $newMessage.querySelector('.loader')
    if (text != "") {
        $load.remove()
    }
    $text.textContent = text
    $who.textContent = sender == 'bot' ? 'IA' : 'Tú'
    $newMessage.classList.add(sender)

    $messages.appendChild($newMessage)

    $container.scrollTop = $container.scrollHeight

    return $text
}
