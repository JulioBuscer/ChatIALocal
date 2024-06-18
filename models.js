export const model_list = [
    // Llama-3
    {
        model: "https://huggingface.co/mlc-ai/Llama-3-8B-Instruct-q4f32_1-MLC",
        model_id: "Llama-3-8B-Instruct-q4f32_1-MLC-1k",
        model_lib:


            "/Llama-3-8B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 5295.7,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Llama-3-8B-Instruct-q4f16_1-MLC",
        model_id: "Llama-3-8B-Instruct-q4f16_1-MLC-1k",
        model_lib:


            "/Llama-3-8B-Instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4598.34,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Llama-3-8B-Instruct-q4f32_1-MLC",
        model_id: "Llama-3-8B-Instruct-q4f32_1-MLC",
        model_lib:


            "/Llama-3-8B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 6101.01,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Llama-3-8B-Instruct-q4f16_1-MLC",
        model_id: "Llama-3-8B-Instruct-q4f16_1-MLC",
        model_lib:


            "/Llama-3-8B-Instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 5001.0,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    // Hermes-2 Pro
    {
        model:
            "https://huggingface.co/mlc-ai/Hermes-2-Pro-Llama-3-8B-q4f16_1-MLC",
        model_id: "Hermes-2-Pro-Llama-3-8B-q4f16_1-MLC",
        model_lib:


            "/Llama-3-8B-Instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4976.13,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC",
        model_id: "Hermes-2-Pro-Llama-3-8B-q4f32_1-MLC",
        model_lib:


            "/Llama-3-8B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 6051.27,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/Hermes-2-Pro-Mistral-7B-q4f16_1-MLC",
        model_id: "Hermes-2-Pro-Mistral-7B-q4f16_1-MLC",
        model_lib:


            "/Mistral-7B-Instruct-v0.3-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4033.28,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
            sliding_window_size: -1,
        },
    },
    // Phi3-mini-instruct
    {
        model: "https://huggingface.co/mlc-ai/Phi-3-mini-4k-instruct-q4f16_1-MLC",
        model_id: "Phi-3-mini-4k-instruct-q4f16_1-MLC",
        model_lib:


            "/Phi-3-mini-4k-instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 3672.07,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Phi-3-mini-4k-instruct-q4f32_1-MLC",
        model_id: "Phi-3-mini-4k-instruct-q4f32_1-MLC",
        model_lib:


            "/Phi-3-mini-4k-instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 5483.12,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Phi-3-mini-4k-instruct-q4f16_1-MLC",
        model_id: "Phi-3-mini-4k-instruct-q4f16_1-MLC-1k",
        model_lib:


            "/Phi-3-mini-4k-instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 2520.07,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Phi-3-mini-4k-instruct-q4f32_1-MLC",
        model_id: "Phi-3-mini-4k-instruct-q4f32_1-MLC-1k",
        model_lib:


            "/Phi-3-mini-4k-instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 3179.12,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    // Mistral variants
    {
        model:
            "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.3-q4f16_1-MLC",
        model_id: "Mistral-7B-Instruct-v0.3-q4f16_1-MLC",
        model_lib:


            "/Mistral-7B-Instruct-v0.3-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4573.39,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
            sliding_window_size: -1,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.3-q4f32_1-MLC",
        model_id: "Mistral-7B-Instruct-v0.3-q4f32_1-MLC",
        model_lib:


            "/Mistral-7B-Instruct-v0.3-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 5619.27,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
            sliding_window_size: -1,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/Mistral-7B-Instruct-v0.2-q4f16_1-MLC",
        model_id: "Mistral-7B-Instruct-v0.2-q4f16_1-MLC",
        model_lib:


            "/Mistral-7B-Instruct-v0.3-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4573.39,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
            sliding_window_size: -1,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/OpenHermes-2.5-Mistral-7B-q4f16_1-MLC",
        model_id: "OpenHermes-2.5-Mistral-7B-q4f16_1-MLC",
        model_lib:


            "/Mistral-7B-Instruct-v0.3-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4573.39,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
            sliding_window_size: -1,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC",
        model_id: "NeuralHermes-2.5-Mistral-7B-q4f16_1-MLC",
        model_lib:


            "/Mistral-7B-Instruct-v0.3-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4573.39,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
            sliding_window_size: -1,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/WizardMath-7B-V1.1-q4f16_1-MLC",
        model_id: "WizardMath-7B-V1.1-q4f16_1-MLC",
        model_lib:


            "/Mistral-7B-Instruct-v0.3-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4573.39,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
            sliding_window_size: -1,
        },
    },
    // Gemma-2B
    {
        model: "https://huggingface.co/mlc-ai/gemma-2b-it-q4f16_1-MLC",
        model_id: "gemma-2b-it-q4f16_1-MLC",
        model_lib:


            "/gemma-2b-it-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 1476.52,
        low_resource_required: false,
        buffer_size_required_bytes: 262144000,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/gemma-2b-it-q4f32_1-MLC",
        model_id: "gemma-2b-it-q4f32_1-MLC",
        model_lib:


            "/gemma-2b-it-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 1750.66,
        low_resource_required: false,
        buffer_size_required_bytes: 262144000,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/gemma-2b-it-q4f16_1-MLC",
        model_id: "gemma-2b-it-q4f16_1-MLC-1k",
        model_lib:


            "/gemma-2b-it-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 1476.52,
        low_resource_required: true,
        buffer_size_required_bytes: 262144000,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/gemma-2b-it-q4f32_1-MLC",
        model_id: "gemma-2b-it-q4f32_1-MLC-1k",
        model_lib:


            "/gemma-2b-it-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 1750.66,
        low_resource_required: true,
        buffer_size_required_bytes: 262144000,
        overrides: {
            context_window_size: 1024,
        },
    },
    // Qwen-2
    {
        model: "https://huggingface.co/mlc-ai/Qwen2-0.5B-Instruct-q0f16-MLC",
        model_id: "Qwen2-0.5B-Instruct-q0f16-MLC",
        model_lib:


            "/Qwen2-0.5B-Instruct-q0f16-ctx4k_cs1k-webgpu.wasm",
        low_resource_required: true,
        vram_required_MB: 1624.12,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Qwen2-0.5B-Instruct-q0f32-MLC",
        model_id: "Qwen2-0.5B-Instruct-q0f32-MLC",
        model_lib:


            "/Qwen2-0.5B-Instruct-q0f32-ctx4k_cs1k-webgpu.wasm",
        low_resource_required: true,
        vram_required_MB: 2654.75,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Qwen2-1.5B-Instruct-q4f16_1-MLC",
        model_id: "Qwen2-1.5B-Instruct-q4f16_1-MLC",
        model_lib:


            "/Qwen2-1.5B-Instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        low_resource_required: true,
        vram_required_MB: 1629.75,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Qwen2-1.5B-Instruct-q4f32_1-MLC",
        model_id: "Qwen2-1.5B-Instruct-q4f32_1-MLC",
        model_lib:


            "/Qwen2-1.5B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        low_resource_required: true,
        vram_required_MB: 1888.97,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Qwen2-7B-Instruct-q4f16_1-MLC",
        model_id: "Qwen2-7B-Instruct-q4f16_1-MLC",
        model_lib:


            "/Qwen2-7B-Instruct-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        low_resource_required: false,
        vram_required_MB: 5106.67,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Qwen2-7B-Instruct-q4f32_1-MLC",
        model_id: "Qwen2-7B-Instruct-q4f32_1-MLC",
        model_lib:


            "/Qwen2-7B-Instruct-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        low_resource_required: false,
        vram_required_MB: 5900.09,
        overrides: {
            context_window_size: 4096,
        },
    },
    // StableLM-zephyr-1.6B
    {
        model: "https://huggingface.co/mlc-ai/stablelm-2-zephyr-1_6b-q4f16_1-MLC",
        model_id: "stablelm-2-zephyr-1_6b-q4f16_1-MLC",
        model_lib:


            "/stablelm-2-zephyr-1_6b-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 2087.66,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/stablelm-2-zephyr-1_6b-q4f32_1-MLC",
        model_id: "stablelm-2-zephyr-1_6b-q4f32_1-MLC",
        model_lib:


            "/stablelm-2-zephyr-1_6b-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 2999.33,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/stablelm-2-zephyr-1_6b-q4f16_1-MLC",
        model_id: "stablelm-2-zephyr-1_6b-q4f16_1-MLC-1k",
        model_lib:


            "/stablelm-2-zephyr-1_6b-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 1511.66,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/stablelm-2-zephyr-1_6b-q4f32_1-MLC",
        model_id: "stablelm-2-zephyr-1_6b-q4f32_1-MLC-1k",
        model_lib:


            "/stablelm-2-zephyr-1_6b-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 1847.33,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    // RedPajama
    {
        model:
            "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC",
        model_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC",
        model_lib:


            "/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 2972.09,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC",
        model_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC",
        model_lib:


            "/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 3928.09,
        low_resource_required: false,
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC",
        model_id: "RedPajama-INCITE-Chat-3B-v1-q4f16_1-MLC-1k",
        model_lib:


            "/RedPajama-INCITE-Chat-3B-v1-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 2041.09,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC",
        model_id: "RedPajama-INCITE-Chat-3B-v1-q4f32_1-MLC-1k",
        model_lib:


            "/RedPajama-INCITE-Chat-3B-v1-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 2558.09,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    // TinyLlama v1.0
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC",
        model_lib:


            "/TinyLlama-1.1B-Chat-v1.0-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 697.24,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC",
        model_lib:


            "/TinyLlama-1.1B-Chat-v1.0-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 839.98,
        low_resource_required: true,
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v1.0-q4f16_1-MLC-1k",
        model_lib:


            "/TinyLlama-1.1B-Chat-v1.0-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 675.24,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v1.0-q4f32_1-MLC-1k",
        model_lib:


            "/TinyLlama-1.1B-Chat-v1.0-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 795.98,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    // BELOW ARE MODELS OF OLDER VERSIONS OR NOT AS PRACTICAL
    // Llama-3 70B
    {
        model: "https://huggingface.co/mlc-ai/Llama-3-70B-Instruct-q3f16_1-MLC",
        model_id: "Llama-3-70B-Instruct-q3f16_1-MLC",
        model_lib:


            "/Llama-3-70B-Instruct-q3f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 31153.13,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    // Llama-2
    {
        model: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1-MLC",
        model_id: "Llama-2-7b-chat-hf-q4f32_1-MLC-1k",
        model_lib:


            "/Llama-2-7b-chat-hf-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 5284.01,
        low_resource_required: false,
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC",
        model_id: "Llama-2-7b-chat-hf-q4f16_1-MLC-1k",
        model_lib:


            "/Llama-2-7b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 4618.52,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1-MLC",
        model_id: "Llama-2-7b-chat-hf-q4f32_1-MLC",
        model_lib:


            "/Llama-2-7b-chat-hf-q4f32_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 9109.03,
        low_resource_required: false,
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f16_1-MLC",
        model_id: "Llama-2-7b-chat-hf-q4f16_1-MLC",
        model_lib:


            "/Llama-2-7b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 6749.02,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/Llama-2-13b-chat-hf-q4f16_1-MLC",
        model_id: "Llama-2-13b-chat-hf-q4f16_1-MLC",
        model_lib:


            "/Llama-2-13b-chat-hf-q4f16_1-ctx4k_cs1k-webgpu.wasm",
        vram_required_MB: 11814.09,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 4096,
        },
    },
    // Phi-2
    {
        model: "https://huggingface.co/mlc-ai/phi-2-q4f16_1-MLC",
        model_id: "phi-2-q4f16_1-MLC",
        model_lib:


            "/phi-2-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 3053.97,
        low_resource_required: false,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/phi-2-q4f32_1-MLC",
        model_id: "phi-2-q4f32_1-MLC",
        model_lib:


            "/phi-2-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 4032.48,
        low_resource_required: false,
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/phi-2-q4f16_1-MLC",
        model_id: "phi-2-q4f16_1-MLC-1k",
        model_lib:


            "/phi-2-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 2131.97,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/phi-2-q4f32_1-MLC",
        model_id: "phi-2-q4f32_1-MLC-1k",
        model_lib:


            "/phi-2-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 2740.48,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    // Phi-1.5
    {
        model: "https://huggingface.co/mlc-ai/phi-1_5-q4f16_1-MLC",
        model_id: "phi-1_5-q4f16_1-MLC",
        model_lib:


            "/phi-1_5-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 1210.09,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/phi-1_5-q4f32_1-MLC",
        model_id: "phi-1_5-q4f32_1-MLC",
        model_lib:


            "/phi-1_5-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 1682.09,
        low_resource_required: true,
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/phi-1_5-q4f16_1-MLC",
        model_id: "phi-1_5-q4f16_1-MLC-1k",
        model_lib:


            "/phi-1_5-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 1210.09,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model: "https://huggingface.co/mlc-ai/phi-1_5-q4f32_1-MLC",
        model_id: "phi-1_5-q4f32_1-MLC-1k",
        model_lib:


            "/phi-1_5-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 1682.09,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
    // TinyLlama v0.4
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC",
        model_lib:


            "/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 697.24,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC",
        model_lib:


            "/TinyLlama-1.1B-Chat-v0.4-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 839.98,
        low_resource_required: true,
        overrides: {
            context_window_size: 2048,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v0.4-q4f16_1-MLC-1k",
        model_lib:


            "/TinyLlama-1.1B-Chat-v0.4-q4f16_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 675.24,
        low_resource_required: true,
        required_features: ["shader-f16"],
        overrides: {
            context_window_size: 1024,
        },
    },
    {
        model:
            "https://huggingface.co/mlc-ai/TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC",
        model_id: "TinyLlama-1.1B-Chat-v0.4-q4f32_1-MLC-1k",
        model_lib:


            "/TinyLlama-1.1B-Chat-v0.4-q4f32_1-ctx2k_cs1k-webgpu.wasm",
        vram_required_MB: 795.98,
        low_resource_required: true,
        overrides: {
            context_window_size: 1024,
        },
    },
]

export default model_list