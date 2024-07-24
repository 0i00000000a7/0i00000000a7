function formatBB(ex, acc) {
        let e = ex.log10().floor()
		if (ex.lt(1e6)) {
			return formatShort(ex, acc)
		} else if (ex.gte("eeee10")) {
			let slog = ex.slog()
			return (slog.gte(1e9)?'':BE(10).pow(slog.sub(slog.floor())).toFixed(3)) + "F" + format(slog.floor(), 0)
		} else {
			let m = ex.div(BE(10).pow(e))
			let a = BE(4).sub(e.log10().floor())
			return (a.lt(0)?'':m.toFixed(a))+'e'+format(e, 0)
		}
}
function formatShort(ex, acc = 0) {
	let a = Math.max(acc - Math.max(ex.log10().floor().toNumber(), 0), 0)
	return a>0?ex.toFixed(a):ex.toFixed(a).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
