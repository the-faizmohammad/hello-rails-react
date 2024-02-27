# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Greeting.create(message: "Hello User! How are you? (English - United States)")
Greeting.create(message: "¡Hola Usuario! ¿Cómo estás? (Spanish - Spain)")
Greeting.create(message: "Bonjour utilisateur ! Comment ça va ? (French - France)")
Greeting.create(message: "Hallo Benutzer! Wie geht es Ihnen? (German - Germany)")
Greeting.create(message: "Ciao Utente! Come stai? (Italian - Italy)")
Greeting.create(message: "Olá Usuário! Como você está? (Portuguese - Brazil)")
Greeting.create(message: "Привет, пользователь! Как вы? (Russian - Russia)")
Greeting.create(message: "مرحبًا المستخدم! كيف حالك؟ (Arabic - United Arab Emirates)")
Greeting.create(message: "नमस्ते उपयोगकर्ता! आप कैसे हैं? (Hindi - India)")
Greeting.create(message: "नमस्कार प्रयोगकर्ता! तुम्ही कसे आहात? (Marathi - India)")
Greeting.create(message: "您好用户！你好吗？ (Chinese (Simplified) - China)")
Greeting.create(message: "안녕하세요! 어떻게 지내세요? (Korean - South Korea)")
Greeting.create(message: "こんにちは、ユーザーさん！お元気ですか？ (Japanese - Japan)")
Greeting.create(message: "வணக்கம் பயனர்! உங்கள் உடல் நலம் ஆகுமா? (Tamil - India)")
Greeting.create(message: "హలో వినియోగదారు! మీరు ఎలా ఉన్నారు? (Telugu - India)")
