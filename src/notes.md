# Update for Friday, September 11, 2020

- We began incorporating a backend. So far, we updated our action creators and rootReducer functions to get a post overview/titles array (GET /api/posts/) and to get details for an individual post (GET /api/posts/:postid).
- Next Steps (currently in step 4):
  - Adding, editing, and deleting posts
  - Adding and deleting comments
  - Display a loading message

### App -> {NavBar, Routes}

- NavBar
  - (links to HomePage/PostList, PostForm)

### Routes -> {HomePage, PostForm, PostDisplay}

### HomePage -> PostList

- Routes
  - Homepage
    - (route /)
    - PostList
      - (links to)PostDisplay
  - PostForm (adding a new post, updating a post)
    - State: formData
  - PostDisplay
    - (route /:postid)

Redux:

- index.js: create store pass down to Provideer component
  - TitleList --> useSelector(cb)
    useSelector(store => store.postlist)

App
├─┬ components/Home
│ └── components/TitleList (redux)
├─┬ components/NewPost (redux) - store brings down addPost()
│ └── components/PostForm
└─┬ components/Post (redux)
├── components/CommentForm
├── components/CommentList
├── components/PostDisplay
└── components/PostForm

reducer(ini state, action)

action.type === "ADD_POST"
DO THIS...

- change to state is when you add a new post, edit -- that's changing the
  post object {id: {post info}}

- dispatch

{ "post": {

'ajdjdjd12121' : {
title: 'Welcome to Microblog!',
description: 'user guide',
body: 'Blog to your heart\'s content',
comments: [{'id':'first'}, {'id':'second']
},
'ajdjdjd12121' : {
id: 2,
title: "Bluegrass Festival",
description: 'Archives from our previous years are still available',
body: 'Check out our live performance archives (since we started streaming in 2012)',
comments: [{'id':'first'}, {'id':'second']
}
}
}

{
"products": {
"47314fa1-ae56-4eae-80be-af6691145951": {
"name": "tv",
"price": 219.99,
"description": "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
"image_url": "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
},
"3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": {
"name": "microwave",
"price": 100.00,
"description": "Heat your food with the power of SCIENCE!",
"image_url": "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
}
}
