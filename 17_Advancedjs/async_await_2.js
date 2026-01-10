// Each await blocks the function until that Promise finishes.
// Next line doesn’t start until the previous one is done.

function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data Fetched!");
        }, 2000);
    })
}

function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment Data Fetched")
        }, 3000);
    })
}

async function getBlogData(){
    try {
        console.log("Fetching blog data");

        // const blogData = await fetchPostData();
        // const CommentData = await fetchCommentData();
        //Better approach of above awaits 

        const [blogData, CommentData] = await Promise.all([
            fetchPostData(),
            fetchCommentData(),
        ]);
        
        console.log(blogData);
        console.log(CommentData);
        
        console.log("Fetch complete");
    } catch (error) {
        console.error("Error fetching blog data");   
    }
}

getBlogData();

/*
getBlogData() is called
console of fetching blog data is printed
fetchPostData() is called 
Promise returns and the timer starts
Await keyword is read and pauses the function further
After timer ends await resumes the function , promise is resolved and stored in const blogData.
Next await function , fetchCommentData() is called
Promise is returned , timer is on and await keyword is read and pauses the function again 
Timer ends and await resumes the function , resolve is stored in const CommentData 
The console.logs are then printed in one go , takes 5 secs in total 

If console.log of each await was present one by one , then it would have printed in respective 2 and 3 seconds , not 5 seconds after first console.log print

*/
