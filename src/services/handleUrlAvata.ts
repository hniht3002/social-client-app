const handleUrlAvata =async (url:string) => {
    let checkStatus = false;
    const check =async ()=>{
      const res = await fetch(url)
      if(res.ok){
        checkStatus = true;
      }
    }
    await check();
    if(checkStatus){
      return url;
    }
    else{
      return 'http://localhost:3001/avata/default.png'
    }
}

export default handleUrlAvata;