from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

cards_data = {
    "cards": [
        {
            "id": 1,
            "source":"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop",
            'name': "White T-Shirt",
            "price": "10",
            "brand": "The Souled Store",
            "link":"https://www.thesouledstore.com/",
            "tagline":"imagine yourself in a white t-shirt",
        },
        {
            "id": 2,
            "source":"https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop",
            "name": "Black T-Shirt",
            "price": "12",
            "brand": "Zudio",
            "link":"https://www.zudio.com/",
            "tagline":"imagine yourself in a black t-shirt",
        },
        {
            "id": 3,
            "source":"https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop",
            "name": "White Top",
            "price": "20",
            "brand": "Peter England",
            "link":"https://peterengland.abfrl.in/",
            "tagline":"imagine yourself in a white top",
        },
        {
            "id": 4,
            "source":"https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop",
            "name": "Denim Shorts",
            "price": "27",
            'brand': "Indian Terrain",
            "link":"https://www.indianterrain.com/",
            "tagline":"imagine yourself in denim shorts",
        },
        {
            "id": 5,
            "source":"https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop",
            "name": "Max Jeans",
            "price": "70",
            "brand": "Max",
            "link":"https://www.maxfashion.in/in/en/",
            "tagline":"imagine yourself in max jeans"
        }
    ]
}

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify(cards_data["cards"])


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8000)
