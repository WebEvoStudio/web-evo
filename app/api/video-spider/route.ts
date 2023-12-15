const getV = async (src: string) => {
  const id = /fid=(.*)/.exec(src)?.at(1);

  const host = 'https://weibo.com';
  const path = '/tv/api/component';
  // const params = `?page=/tv/show/${id}`;
  const params = `?page=/tv/show/${id}`;
  const url = host + path + params;
  console.log(url);
  const formData = new FormData();
  formData.append('data', JSON.stringify({Component_Play_Playinfo: {oid: id}}));
  const response = await fetch(url, {
    body: formData,
    method: 'POST',
    headers: {
      'Cookie': 'SUB=_2AkMSIKJxf8NxqwFRmfoWzmjibIhzwgnEieKkfFOqJRMxHRl-yT9kqmgrtRB6OaCMng8wuZIVAUk1aKBpykgEItg9Mfn9; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9Wh00YNYJdbp6Kzr71bx_9ws; _s_tentry=passport.weibo.com; Apache=145601819250.38495.1702636872301; SINAGLOBAL=145601819250.38495.1702636872301; ULV=1702636872440:1:1:1:145601819250.38495.1702636872301:; XSRF-TOKEN=K6cu6I1U9UGbWYHYFEurg2Sw; WBPSESS=V0zdZ7jH8_6F0CA8c_ussdvQGhR2QXeIJJgFME4e84pBnEH2olSc9hgE_oIsxJNVn6wXPK7yBbro6t82JCm5fJJ29BalrJBGpH8bKnw-kqGbM7p7ZMVIrS-yf0Tjiiwr',
      'Referer': `https://weibo.com/tv/show/${id}?from=old_pc_videoshow`,
    },
  });
  console.log(response);
  const newVar = await response.json();
  console.log(newVar.data);
  return newVar.data;
};
export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const src = searchParams.get('url');
  const {Component_Play_Playinfo: {text, urls, stream_url: streamUrl}} = await getV(src!!);
  return Response.json({
    title: text,
    urls,
    streamUrl,
  });
}
