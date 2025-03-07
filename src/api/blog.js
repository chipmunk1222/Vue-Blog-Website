import request from './request.js'

export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
  return await request.get('/api/blog',{
    params:{
      page,
      limit,
      categoryid,
    },
  })
}

export async function getBlogType() {
  return await request.get('/api/blogtype')
}

export async function getBlog(id){
  return await request.get(`/api/blog/${id}`)
}

export async function postComment(commentContent){
  return await request.post('/api/comment',commentContent)
}

export async function getComments(blogId,page = 1, limit = 10) {
  return await request.get('/api/comment',{
    params:{
      blogId,
      page,
      limit,
    },
  })
}