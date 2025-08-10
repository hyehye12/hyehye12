async function writePost(collection, post) {
  //생성일시와 조회수
  post.hits = 0;
  post.createdDt = new Date().toISOString();
  return await collection.insertOne(post);
}

module.exports = {
  //require()로 임포트시 외부로 노출하는 객체*/
  writePost,
};
