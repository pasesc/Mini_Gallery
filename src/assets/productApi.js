import productCatalog from "./productCatalog";

export default{
    //获取一个
    getProduct(productId,successCallback,errorCassback){
        const timeout = Math.random() * 1000 + 1000;
        const success = Math.random() < 0.9;
        setTimeout(()=>{
            if(success){
                successCallback(productCatalog.find(_=>_.productId === productId));
            }
            else{
                errorCassback();
            }
        },timeout);
    },
    //获取全部
    getProdunctCatalog(successCallback,errorCassback){
        const timeout = Math.random() * 1000 + 1000;
        const success = Math.random() < 0.9;
        setTimeout(
            ()=>{
                if(success){
                    successCallback(productCatalog);
                }
                else{
                    errorCassback();
                }
            },timeout);
    }
}