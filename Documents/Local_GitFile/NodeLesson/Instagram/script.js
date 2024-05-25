// script.js
document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("postsContainer");
    const profileDetails = document.getElementById("profileDetails");
    // Example data (replace with your data or fetch from an API)
    const posts = [
        { id: 1, imageUrl: "https://via.placeholder.com/300", likes: 10, comments: 5, username: "user1" },
        { id: 2, imageUrl: "https://via.placeholder.com/300", likes: 20, comments: 8, username: "user2" },
        // Add more posts as needed
    ];
    // Function to render posts
    function renderPosts() {
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            const imgElement = document.createElement("img");
            imgElement.src = post.imageUrl;
            postElement.appendChild(imgElement);
            const actionsElement = document.createElement("div");
            actionsElement.classList.add("actions");
            const likeButton = document.createElement("button");
            likeButton.textContent = `Like (${post.likes})`;
            likeButton.addEventListener("click", () => {
                post.likes++;
                likeButton.textContent = `Like (${post.likes})`;
            });
            actionsElement.appendChild(likeButton);
            const commentButton = document.createElement("button");
            commentButton.textContent = `Comment (${post.comments})`;
            commentButton.addEventListener("click", () => {
                // Implement comment functionality
                console.log("Comment clicked");
            });
            actionsElement.appendChild(commentButton);
            postElement.appendChild(actionsElement);
            postsContainer.appendChild(postElement);
            // Add click event to the post
            postElement.addEventListener("click", () => {
                postElement.classList.toggle("clicked");
                updateProfileDetails(post.username); // Update profile details on post click
            });
        });
    }
    // Function to update profile details
    function updateProfileDetails(username) {
        profileDetails.textContent = `Viewing ${username}'s profile`;
    }
    // Initial rendering
    renderPosts();
});