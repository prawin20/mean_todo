var names = require("./model/name");
var path = require("path");

module.exports=function(app){
    
    app.get("/api/name",function(req,res){
        
        names.find(function(err,data){
            if(err){
                res.send(err);
                
            }
            res.send(data);
            
        });
        
    });
    
     app.post("/api/name",function(req,res){
        names.create({name:req.body.n},function(err,data){
            if(err){
                res.send(err);
            }
            names.find(function(err,data){
            if(err){
                res.send(err);
                
            }
            res.send(data);
            
        });
            
        });
        
    });
     app.delete("/api/name/:id",function(req,res){
        names.remove({_id:req.params.id},function(err,data){
            if(err){
                res.send(err);
            }
            names.find(function(err,data){
            if(err){
                res.send(err);
                
            }
            res.send(data);
            
        });
            
        });
        
    });
    
    app.get("*",function(req, res) {
        res.sendFile(path.join(__dirname,"../public/views/","index.html"));
    });
    
};