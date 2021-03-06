module.exports=function(app){
    console.log("routes included");
    app.get("/",function(req,res){
        res.render("index");
    });
    app.get("/about",function(req,res){
        res.render("about/about");
    });
    app.get("/contacts",function(req,res){
        res.render("contacts/contact");
    });
    app.get("/services",function(req,res){
        res.render("services/services");
    });
    app.get("/services/cyberforensics",function(req,res){
        res.render("services/CyberForensics");
    });
    app.get("/services/datasecurity",function(req,res){
        res.render("services/DataSecurity");
    });
    app.get("/services/digitalmarketing",function(req,res){
        res.render("services/DigitalMarketing");
    });
    app.get("/services/emailsecurity",function(req,res){
        res.render("services/EMailsecurity");
    });
    app.get("/services/networksecurity",function(req,res){
        res.render("services/NetworkSecurity");
    });
    app.get("/services/seo",function(req,res){
        res.render("services/seo");
    });
    app.get("/services/socialmediamarketing",function(req,res){
        res.render("services/SocialMedia");
    });
    app.get("/services/websecurity",function(req,res){
        res.render("services/WebSecurity");
    });
    app.get("/solutions",function(req,res){
        res.render("solutions/solutions");
    });
}