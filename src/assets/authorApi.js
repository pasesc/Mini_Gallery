import authorCatalog from "./authorCatalog";

export default{
    //获取一个
    getAuthor(authorId,successCallback,errorCassback){
        const timeout = Math.random() * 1000 + 1000;
        const success = Math.random() < 0.9;
        setTimeout(()=>{
            if(success){
                successCallback(authorCatalog.find(_=>_.authorId === authorId));
            }
            else{
                errorCassback();
            }
        },timeout);
    },
    //获取全部
    getauthorCatalog(successCallback,errorCassback){
        const timeout = Math.random() * 1000 + 1000;
        const success = Math.random() < 0.9;
        setTimeout(
            ()=>{
                if(success){
                    successCallback(authorCatalog);
                }
                else{
                    errorCassback();
                }
            },timeout);
    }
}