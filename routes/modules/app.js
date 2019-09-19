module.exports = (router, ctr) => {

    //页面
    router.get("/index", ctr.app.home.GetHome);

}
