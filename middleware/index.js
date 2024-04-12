
class Middleware {
	async decodeToken(req, res, next) {
		if(req.headers.auth){
			const {username, pass} = req.headers
			try {
				console.log("Decoded value: ", {username, pass})
				if (username === "admin" && pass === "password") {
					req.is_authenticated = true
					req.user = {
                        email: "admin@myapp.com",
                        username: "admin"
                    };
					return next();
				}
				return res.json({ message: 'User unauthorized' });
			} catch (e) {
				console.log(e)
				return res.json({ message: 'Internal server error' });
			}
		}else{
			req.is_authenticated = false
			return next()
		}
	}
}

module.exports = new Middleware();