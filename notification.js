const { default: axios } = require('axios');

async function  sendNotifications() {


  const jsonData = require('./mochawesome.json');

  console.log(jsonData);
  const totalSuites = jsonData.stats.suites;
  const totalTests = jsonData.stats.tests;
  const totalPassed = jsonData.stats.passes;
  const totalFailed = jsonData.stats.failures;

  
    let data = JSON.stringify({
        "@type": "MessageCard",
        "@context": "http://schema.org/extensions",
        "themeColor": "0076D7",
        "summary": "End To End Automation Results",
        "sections": [
            {
                "activityTitle": "Test Automation Results",
                "activitySubtitle": "cypress run",
                "activityImage": "https://adaptivecards.io/content/cats/3.png",
                "facts": [
                    {
                        "name": "Total Suites",
                        "value": totalSuites
                    },
                    {
                        "name": "Total tests",
                        "value": totalTests
                    },
                    {
                        "name": "Total Passed",
                        "value": totalPassed
                    },
                    {
                        "name": "Total Failed",
                        "value": totalFailed
                    }
                ],
                "markdown": true
            }
        ],
        "potentialAction": [
            {
                "@type": "OpenUri",
                "name": "Link to results",
                "targets": [
                    {
                        "os": "default",
                        "uri": "https://learn.microsoft.com/outlook/actionable-messages"
                    }
                ]
            }
        ]
      });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://softwarequalityassociate.webhook.office.com/webhookb2/814b8808-f9c3-406b-b4be-5ae4f100778f@6fe25e66-1099-410b-8c2a-252fdd84f2b4/IncomingWebhook/6a0e2fb53cea4c68a5cb58f32c509098/a7d5a924-0ece-4078-a300-4f4ea568da85',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };


      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
}

sendNotifications();

