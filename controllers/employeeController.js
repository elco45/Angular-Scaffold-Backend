var Employee = require('../schemas/employee');

exports.all = {
  handler: function(request, reply){
    var employees = Employee.find({},function(err,data){
      return reply(data)
    });
  }
}

exports.get = {
  handler: function(request, reply){
    var emp = Employee.findOne({_id: request.payload}, function(err,data){
      return reply(data);
    });
  }
}

exports.add = {
  handler: function(request, reply) {
    var newEmp = new Employee({
      firstName: request.payload.firstName,
      lastName: request.payload.lastName
    });
    newEmp.save(function (err) {
      if(err){
        return reply(err);
      }else{
        return reply(newEmp);
      }
    });
  }
}

exports.delete = {
  handler: function(request, reply){
    Employee.findOneAndRemove({ _id: request.params.payload}, function(err) {
      if (err) {
        throw err;
      } 
      return reply('ok')
    });
  }
}

exports.update = {
  handler: function(request, reply) {
    var emp = Employee.findOne({_id: request.payload._id},
      function(err,data){
        data.firstName = request.payload.firstName;
        data.lastName = request.payload.lastName;
        data.save(function (err) {
          if(err){
            return reply(err);
          }
          return reply('ok')
        });
    });
  }
}


