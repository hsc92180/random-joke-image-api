# Random Jokes and Images API

## Description
This API provides random jokes and images. It includes endpoints to fetch random jokes, random images, and both in a single response.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd random-jokes-images-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node index.js
    ```

## Endpoints

### Fetch Random Joke
- **URL**: `/api/v1/random-joke`
- **Method**: GET
- **Headers**: 
  - `x-api-key`: Your API key

### Fetch Random Image
- **URL**: `/api/v1/random-image`
- **Method**: GET
- **Query Parameters**: 
  - `category`: One of the following categories - nature, city, technology, food, still_life, abstract, wildlife.
  - `width`: Width of the image (default is 640).
  - `height`: Height of the image (default is 480).
- **Headers**: 
  - `x-api-key`: Your API key
  - `Accept`: `image/jpg`

### Fetch Random Joke and Image
- **URL**: `/api/v1/random`
- **Method**: GET
- **Query Parameters**: 
  - `category`: One of the following categories - nature, city, technology, food, still_life, abstract, wildlife.
  - `width`: Width of the image (default is 640).
  - `height`: Height of the image (default is 480).
- **Headers**: 
  - `x-api-key`: Your API key
  - `Accept`: `image/jpg`

## Challenges Faced
- Integrating and handling data from multiple APIs.
- Ensuring correct data format (Base64) for images.

## Testing
Use Postman to test the API endpoints by making GET requests and verifying the responses.
