var employeeController = require('./controllers/employeeController');
exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, API')}}},
					 {method: 'GET', path: '/v1/allEmployees', config: employeeController.all},
					 {method: 'POST', path: '/v1/getEmployee', config: employeeController.get},
					 {method: 'POST', path: '/v1/addEmployee', config: employeeController.add},
					 {method: 'DELETE', path: '/v1/deleteEmployee/{payload}', config: employeeController.delete},
					 {method: 'POST', path: '/v1/updateEmployee', config: employeeController.update}
			];
