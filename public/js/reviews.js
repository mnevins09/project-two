//Populates User Reviews 
$(document).ready(function () {
  /* global moment */

  // reviewsContainer holds all of our posts
  var reviewsContainer = $(".review-container");
  var postCategorySelect = $("#category");

  //alert("Enter your name below to create an author account and post your review");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);
  // Variable to hold our posts
  var posts;

  // The code below handles the case where we want to get reviews posts for a specific author
  // Looks for a query param in the url for author_id
  var url = window.location.search;
  var authorId;
  if (url.indexOf("?author_id=") !== -1) {
    authorId = url.split("=")[1];
    getPosts(authorId);
  }
  // If there's no authorId we just get all posts as usual
  else {
    getPosts();
  }


  // This function grabs posts from the database and updates the view
  function getPosts(author) {
    authorId = author || "";
    if (authorId) {
      authorId = "/?author_id=" + authorId;
    }
    $.get("/api/posts" + authorId, function (data) {
      console.log("Posts", data);
      posts = data;
      // if (!posts || !posts.length) {
      //   displayEmpty(author);
      // }
      // else {
        initializeRows();
      // }
    });
  }

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/reviews/" + id
    })
      .then(function () {
        getPosts(postCategorySelect.val());
      });
  }

  // InitializeRows handles appending all of our constructed post HTML inside reviews Container
  function initializeRows() {
    reviewsContainer.empty();
    var postsToAdd = [];
    for (var i = 0; i < posts.length; i++) {
      postsToAdd.push(createNewRow(posts[i]));
    }
    reviewsContainer.append(postsToAdd);
  }

  // This function constructs a post's HTML
  function createNewRow(post) {
    var formattedDate = new Date(post.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    var newPostCard = $("<div>");
    newPostCard.css({
      "margin-bottom": "25px",
      "margin-top": "25px"
    })
    newPostCard.addClass("card");
    var newPostCardHeading = $("<div>");
    newPostCardHeading.addClass("card-header");
    //WILL BE USED LATER FOR ADMIN LOGIN 
    // var deleteBtn = $("<button>");
    // deleteBtn.text("x");
    // deleteBtn.addClass("delete btn btn-danger");
    // var editBtn = $("<button>");
    // editBtn.text("EDIT");
    // editBtn.addClass("edit btn btn-info");
    var newPostAuthor = $("<u><h5>");
    newPostAuthor.text(post.Author.name);
    newPostAuthor.css({
      color: "green",
      "margin-top": "-10px"
    });
    var newPostTitle = $("<h5><strong>");
    newPostTitle.css({
      color: "navy",
      "margin-top": "10px"
    })
    var newPostDate = $("<h6>");
    newPostDate.css({
      "margin-top": "15px",
      "font-size": "10px",
      float: "right"
    })
    
    var newPostCardBody = $("<div>");
    newPostCardBody.addClass("card-body");
    newPostCardBody.css({
      background: "beige",

    })
    var newPostBody = $("<h4>");
    newPostCardHeading.append(newPostAuthor);
    newPostTitle.text(post.title + " ");
    newPostBody.text(post.body);
    newPostDate.text(formattedDate);
    newPostTitle.append(newPostDate);
    //WILL BE USED LATER FOR ADMIN LOGIN 
    // newPostCardHeading.append(deleteBtn);
    // newPostCardHeading.append(editBtn);
    newPostCardHeading.append(newPostTitle);
    
    newPostCardBody.append(newPostBody);
    newPostCard.append(newPostCardHeading);
    newPostCard.append(newPostCardBody);
    newPostCard.data("post", post);
    return newPostCard;
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handlePostDelete() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    window.location.href = "/cms?post_id=" + currentPost.id;
  }

  // This function displays a message when there are no posts
  // function displayEmpty(id) {
  //   var query = window.location.search;
  //   var partial = "";
  //   if (id) {
  //     partial = " for Author #" + id;
  //   }
  //   reviewsContainer.empty();
  // var messageH2 = $("<h2>");
  // messageH2.css({ "text-align": "center", "margin-top": "50px" });
  // messageH2.html("No posts yet" + partial + ", navigate <a href='/cms" + query +
  // "'>here</a> in order to get started.");
  // reviewsContainer.append(messageH2);
  // }

});