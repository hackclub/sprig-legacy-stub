export default (req, res) => {
	let query = req.url.split('?')[1]
	query = query ? '?' + query : ''
	res.redirect(301, `https://sprig.hackclub.com/editor${query}`)
}