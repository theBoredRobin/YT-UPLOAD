function upload(url, title, description, topics){
  try {
    var video = UrlFetchApp.fetch("VIDEO URL"); YouTube.Videos.insert({
      snippet: { 
        title: "TITLE",
        description: "VIDEO DESCRIPTION",
      status: { privacyStatus: "unlisted", },
        tags: ["TAGS"] },
       },
       "snippet,status", video);
    return ContentService.createTextOutput("Successfully completed") } catch (err) { return ContentService.createTextOutput(err.message) } }