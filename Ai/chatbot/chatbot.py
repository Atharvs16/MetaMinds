import requests

API_URL = "https://api-inference.huggingface.co/models/google/gemma-2-2b-it"
HEADERS = {"Authorization": "Bearer HUGGINGFACE_API_KEY"}

chat_history = []  # Store previous messages

def chat_with_bot(user_input):
    global chat_history
    chat_history.append(f"User: {user_input}")
    
    # Combine chat history for context
    prompt = "\n".join(chat_history[-5:])  # Keep last 5 messages for context

    response = requests.post(API_URL, headers=HEADERS, json={"inputs": prompt})
    data = response.json()

    if isinstance(data, dict) and "error" in data:
        return f"Error: {data['error']}"

    bot_response = data[0]["generated_text"] if isinstance(data, list) else "Unexpected response format."
    
    chat_history.append(f"Bot: {bot_response}")  # Add bot's response to history
    return bot_response

while True:
    user_input = input("You: ")
    if user_input.lower() in ["exit", "quit"]:
        break
    print("Bot:", chat_with_bot(user_input))
