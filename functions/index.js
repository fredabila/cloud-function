/* eslint-disable require-jsdoc */
const functions = require("firebase-functions");
const axios = require("axios");

exports.publishCharlesPost = functions.https.onRequest(async (req, res) => {
  try {
    const {text} = req.body;
    await publishPost(text);

    // Send JSON response indicating success
    res.status(200).json({message: "Post published successfully."});
  } catch (error) {
    console.error("Error publishing post:", error);
  }
});


async function publishPost(text) {
  console.log(text);
  // Call the publish post API endpoint with the processed text
  // eslint-disable-next-line max-len
  const sessionId = "ab2b2869e7123e4e36dd46839c04b5aa8d7fb86116973190197abdfd31f6c7fd206fcafce3d315914f";
  const publishPostUrl = `https://buzzchat.site/mobile_api/publish_post?session_id=${sessiond}`; // Replace with your access token
  // Create FormData object and append fields
  const formData = new FormData();
  formData.append("post_text", text);
  formData.append("gif_src", "");
  formData.append("privacy", "everyone");

  // Make POST request using FormData
  const response = await axios.post(publishPostUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  // Log response
  console.log("Post published:", response.data);
}
