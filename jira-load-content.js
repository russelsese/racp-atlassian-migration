// Your HTML content as a string
const htmlContent = `
<html><head>
    <title>Jira is Now Hosted in the Cloud</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
            text-align: center;
        }
        .container {
            background-color: #fff;
            margin: 100px auto;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            max-width: 600px;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        .new-link {
            font-weight: bold;
            color: #007bff;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Jira is Now Hosted in the Cloud</h1>
        <p>We are excited to announce that Jira is now hosted in the cloud for a better user experience.</p>
        <p>As a result, this page is no longer valid. Please proceed to the new website by clicking the following link:</p>
        <p><a href="https://racp.atlassian.net" class="new-link">https://racp.atlassian.net</a></p>
        <p>If you have any questions, please contact our support team at <a href="mailto:support@racp.edu.au" class="new-link">support@racp.edu.au</a>.</p>
        <p>Thank you for your understanding.</p>
    </div>


</body></html>
`;

// Function to load the HTML content
function loadHTMLContent() {
    const contentContainer = document.getElementById('content-container');
    contentContainer.innerHTML = htmlContent;
}

// Call the function to load the HTML content
loadHTMLContent();
