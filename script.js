
    const postMessage = [];

    function updateLastUserActivityTime() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
    }
    
    function createPost(postData) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          postMessage.push({ title: postData.title, body: postData.body });
          resolve();
        }, 3000);
      });
    }

    const postPromise = createPost({ title: 'POST FIVE', body: 'this post is FIVE' });
    const updatePromise = updateLastUserActivityTime();
    
    
    Promise.all([postPromise, updatePromise])
      .then(() => {
        console.log('Both promises resolved successfully.');
        console.log('postMessage:', postMessage);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
    