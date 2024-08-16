import { html, render } from 'lit-html';
import logo from './logo2.svg';


class App {
  constructor() {
    this.isFormVisible = false;
    this.#init();
  }


  #init() {
    // Initialize the app by rendering the button
    this.#render();

    // Add event listener to the button
    document.getElementById('btn-form').addEventListener('click', () => {
      this.isFormVisible = true;
      this.#render();
    });
  }

  #handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic here
    alert('Your report has been submitted. We will contact you soon. Stay safe.');
    e.target.reset();
    this.isFormVisible = false;
    this.#render();
  };

  #render() {
    const body = html`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <title>Safe Haven: Report an Incident</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Safely and anonymously report a gender-based violence incident on Safe Haven's secure platform.">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
        <style>
          :root {
            --primary-color: #8e44ad;
            --secondary-color: #9b59b6;
            --accent-color: #f1c40f;
            --text-color: #333;
            --bg-color: #f5e8ff;
            --safe-color: #2ecc71;
            --danger-color: #e74c3c;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--bg-color);
          }

          .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          nav {
            background-color: var(--primary-color);
            padding: 1rem 0;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
          }

          nav .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            color: #fff;
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;
            display: flex;
            align-items: center;
          }

          .logo img {
            height: 40px;
            margin-right: 10px;
          }

          .exit-button {
            background-color: var(--danger-color);
            color: #fff;
            border: none;
            padding: 8px 16px;
            border-radius: 5px;
            font-weight: bold;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .exit-button:hover {
            background-color: #c0392b;
          }

          main {
            padding-top: 80px;
            min-height: calc(100vh - 80px);
          }

          .report-section {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
            padding: 2rem;
            margin-top: 2rem;
          }

          .section-title {
            color: var(--primary-color);
            margin-bottom: 1.5rem;
            font-size: 1.5rem;
            text-align: center;
          }

          .report-form {
            display: grid;
            gap: 1rem;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-group label {
            margin-bottom: 0.5rem;
            font-weight: bold;
            color: var(--secondary-color);
          }

          .form-group input,
          .form-group textarea,
          .form-group select {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
          }

          .form-group textarea {
            resize: vertical;
            min-height: 100px;
          }

          .checkbox-group {
            display: flex;
            align-items: center;
            margin-top: 1rem;
          }

          .checkbox-group input[type="checkbox"] {
            margin-right: 10px;
          }

          .file-input {
            margin-top: 0.5rem;
          }

          .submit-button {
            background-color: var(--primary-color);
            color: #fff;
            border: none;
            padding: 12px 24px;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
          }

          .submit-button:hover {
            background-color: var(--secondary-color);
          }

          @media (max-width: 768px) {
            .container {
              width: 95%;
            }

            .logo {
              font-size: 1.2rem;
            }

            .exit-button {
              padding: 6px 12px;
              font-size: 0.9rem;
            }

            .section-title {
              font-size: 1.3rem;
            }
          }
        </style>
      </head>
      <body>
        <nav>
          <div class="container">
            <a href="/" class="logo">
              <img src="${logo}" alt="Safe Haven Logo">
              Safe Haven
            </a>
            <a href="https://www.weather.com" class="exit-button" id="exitButton">Quick Exit</a>
          </div>
        </nav>

        <main>
          <div class="container">
            <section class="report-section">
              <h1 class="section-title">Safe Haven Incident Form</h1>
              <form class="report-form" id="reportForm" @submit=${this.#handleSubmit}>
                <div class="form-group">
                  <label for="nickname">Nickname:</label>
                  <input type="text" id="nickname" name="nickname" required>
                </div>
                <div class="form-group">
                  <label>Sex:</label>
                  <div>
                    <label>
                      <input type="radio" name="sex" value="male" required> Male
                    </label>
                    <label>
                      <input type="radio" name="sex" value="female" required> Female
                    </label>
                    <label>
                      <input type="radio" name="sex" value="other" required> Other
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="age">Age:</label>
                  <select id="age" name="age" required>
                    <option value="">Select age</option>
                    <option value="under18">Under 18</option>
                    <option value="18-24">18-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55+">55+</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="residence">Residence:</label>
                  <select id="residence" name="residence" required>
                    <option value="">Select residence</option>
                    <option value="urban">Urban</option>
                    <option value="suburban">Suburban</option>
                    <option value="rural">Rural</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="email">E-mail address:</label>
                  <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                  <label for="contact-method">How can we contact you?</label>
                  <select id="contact-method" name="contact-method" required>
                    <option value="">Select contact method</option>
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="sms">SMS</option>
                    <option value="whatsapp">WhatsApp</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="contact-details">Contact details:</label>
                  <input type="text" id="contact-details" name="contact-details" required>
                </div>
                <div class="form-group">
                  <label for="incident-description">Incident Description:</label>
                  <textarea id="incident-description" name="incident-description" required></textarea>
                </div>
                <div class="form-group">
                  <label for="evidence">Upload Evidence (if any):</label>
                  <input type="file" id="evidence" name="evidence" class="file-input" multiple>
                </div>
                <div class="checkbox-group">
                  <input type="checkbox" id="consent" name="consent" required>
                  <label for="consent">I consent to the use of my details for reporting purposes</label>
                </div>
                <button type="submit" class="submit-button">Send</button>
              </form>
            </section>
          </div>
        </main>

        <script>
          // Quick exit functionality
          document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
              window.location.href = 'https://www.weather.com';
            }
          });

          // Exit button functionality
          document.getElementById('exitButton').addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'https://www.weather.com';
          });
        </script>
      </body>
      </html>
    `;

    render(body, document.body);render(body, document.getElementById('form-container'));
  }
}

export default App;