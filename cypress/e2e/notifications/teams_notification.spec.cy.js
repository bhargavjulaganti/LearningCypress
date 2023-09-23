describe('send teams notification', () => {
    it('send test results', () => {


        // cy.readFile('cypress/results/.jsons/merge-path.json').then(x => {
        //     console.log('****************************')
        //     console.log(x.stats.suites)
        //     console.log('*********************')
          
        //   })

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
                    "name": "Total Tests",
                    "value": "10"
                  },
                  {
                    "name": "Passed",
                    "value": "8"
                  },
                  {
                    "name": "Failed",
                    "value": "2"
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
  

        // cy.request({
        //     method: 'POST',
        //     url: 'https://softwarequalityassociate.webhook.office.com/webhookb2/814b8808-f9c3-406b-b4be-5ae4f100778f@6fe25e66-1099-410b-8c2a-252fdd84f2b4/IncomingWebhook/6a0e2fb53cea4c68a5cb58f32c509098/a7d5a924-0ece-4078-a300-4f4ea568da85', 
        //     headers: { 
        //         'Content-Type': 'application/json'
        //       },
        //     body : {
                
        //             "@type": "MessageCard",
        //             "@context": "http://schema.org/extensions",
        //             "themeColor": "0076D7",
        //             "summary": "End To End Automation Results",
        //             "sections": [
        //                 {
        //                     "activityTitle": "Test Automation Results",
        //                     "activitySubtitle": "cypress run",
        //                     "activityImage": "https://adaptivecards.io/content/cats/3.png",
        //                     "facts": [
        //                         {
        //                             "name": "Total Tests",
        //                             "value": "11"
        //                         },
        //                         {
        //                             "name": "Passed",
        //                             "value": "8"
        //                         },
        //                         {
        //                             "name": "Failed",
        //                             "value": "2"
        //                         }
        //                     ],
        //                     "markdown": true
        //                 }
        //             ],
        //             "potentialAction": [
        //                 {
        //                     "@type": "OpenUri",
        //                     "name": "Link to results",
        //                     "targets": [
        //                         {
        //                             "os": "default",
        //                             "uri": "https://learn.microsoft.com/outlook/actionable-messages"
        //                         }
        //                     ]
        //                 }
        //             ]
        //     }
        //   }).then((response) => {
        //     console.log('response start');
        //     console.log(response.body);
        //    // token = response.body['access_token'];
        //     console.log('response end')
        //   })
    })

})