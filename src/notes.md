 ### App -> {NavBar, Routes}
- NavBar 
  - (links to HomePage/PostList, PostForm)

### Routes -> {HomePage, PostForm, PostDetail}
### HomePage -> PostList
- Routes
    - Homepage
        - (route /)
        - PostList
            - (links to)PostDetail
    - PostForm
      - State: formData
    - PostDetail
        - (route /:postid)
