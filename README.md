# Public Sentiment Analysis Web Application

## Overview
The **Public Sentiment Analysis Web Application** is a platform designed to help businesses and organizations extract meaningful insights from customer feedback, social media mentions, and reviews. Unlike basic sentiment analysis tools, this application provides a comprehensive solution, including real-time sentiment monitoring, trend analysis, topic modeling, and actionable insights, making it easier for businesses to respond to customer concerns effectively.

## Features
- **Sentiment Analysis**: Classify feedback as positive, negative, or neutral using advanced NLP techniques.
- **Trend Analysis**: Track sentiment over time (e.g., monthly or weekly trends) to identify shifts in public opinion.
- **Topic Modeling**: Identify common themes or issues discussed in customer feedback using techniques like Latent Dirichlet Allocation (LDA).
- **Real-time Social Media Monitoring**: Integrate with platforms like Twitter and Reddit to analyze real-time public sentiment.
- **Visualization Dashboard**: Interactive graphs and charts to visualize sentiment trends, top topics, and actionable insights.
- **Actionable Insights**: Generate recommendations based on sentiment trends to help businesses take proactive actions.

## Technologies Used
### Frontend
- **React**: For building the dynamic user interface.
- **Material UI** or **Bootstrap**: For responsive design and components.
- **D3.js / Chart.js**: For data visualization and graphical representation of sentiment trends.

### Backend
- **Node.js**: For building the backend API.
- **Express**: For handling server-side logic and API endpoints.
- **Flask (Python)**: For integrating sentiment analysis models built using Python-based NLP techniques.

### Sentiment Analysis
- **HuggingFace Transformers**: For advanced NLP models like BERT or DistilBERT.
- **TextBlob**: For basic sentiment analysis, in case a simpler approach is preferred.

### Database
- **MongoDB**: For storing sentiment results, feedback, and analysis data.
- **Mongoose**: For interacting with MongoDB in Node.js.

### Social Media Integration
- **Twitter API**: For fetching and analyzing tweets in real-time.
- **Reddit API**: For analyzing discussions from Reddit threads.

---

## Installation

### Prerequisites
- **Node.js** (for backend)
- **npm** (Node.js package manager)
- **Python 3.x** (for NLP and sentiment analysis models)
- **MongoDB** (local installation or cloud-based solution like MongoDB Atlas)

---

### Step 1: Clone the Repository
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/Understanding-Public-Sentiment.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Understanding-Public-Sentiment
   ```

---

### Step 2: Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder and add the following environment variables:
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/sentiment?retryWrites=true&w=majority
   PORT=5000
   ```
   Replace `<username>` and `<password>` with your MongoDB credentials.

4. Start the backend server:
   ```bash
   nodemon server.js
   ```
   The backend will run on `http://localhost:5000`.

---

### Step 3: Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

---

## Usage

### Sentiment Analysis
1. Open the application in your browser at `http://localhost:3000`.
2. Enter feedback text, source, and topic in the form.
3. Submit the form to analyze the sentiment.
4. View the sentiment score and detailed breakdown (positive, neutral, negative).

### Feedback Distribution Chart
- The dashboard displays a bar chart showing the count of positive, neutral, and negative feedback stored in the database.

---

## Example Workflow
1. **Input**:
   - Text: "The product is amazing and works perfectly!"
   - Source: "Twitter"
   - Topic: "Product Quality"

2. **Output**:
   - Sentiment Score: 0.8545
   - Details:
     - Negative: 0.0
     - Neutral: 0.299
     - Positive: 0.701
   - Bar Chart:
     - Positive: 3
     - Neutral: 2
     - Negative: 1
