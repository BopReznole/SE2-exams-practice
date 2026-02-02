<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <style>
        /* Simple styling for the login form */
        body {
            font-family: Arial, sans-serif;
        }
        .form-container {
            max-width: 300px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .error-message {
            color: red;
            margin: 10px 0;
            display: none; /* Initially hidden */
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Login</h2>
        <div class="error-message"></div>
        <input type="text" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
        <a href="/reset-password">Forgot your password?</a>
    </div>

    <script>
        document.querySelector('button[type="submit"]').addEventListener('click', async (event) => {
            event.preventDefault();
            const email = document.querySelector('input[name="email"]').value;
            const password = document.querySelector('input[name="password"]').value;

            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const result = await response.json();

            if (response.ok) {
                // On success, redirect to the dashboard
                window.location.href = '/dashboard';
            } else {
                // On failure, display an error message
                document.querySelector('.error-message').innerText = result.message;
                document.querySelector('.error-message').style.display = 'block';
            }
        });
    </script>
</body>
</html>
