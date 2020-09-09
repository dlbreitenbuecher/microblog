 ### App -> {NavBar, Routes}
- NavBar 
  - (links to HomePage/PostList, NewPostForm)

### Routes -> {HomePage, NewPostForm, PostDetail}
### HomePage -> PostList
- Routes
    - Homepage
        - (route /)
        - PostList
            - (links to)PostDetail
    - NewPostForm
      - State: formData
    - PostDetail
        - (route /:postid)
