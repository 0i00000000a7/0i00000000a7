function formatBE(ex, acc) {
        let e = ex.log10().floor()
		if (ex.lt(1e6)) {
			return formatShort(ex, acc)
		} else if (ex.gte("eeee10")) {
			let slog = ex.slog()
			return (slog.gte(1e9)?'':E(10).pow(slog.sub(slog.floor())).toFixed(3)) + "F" + format(slog.floor(), 0)
		} else {
			let m = ex.div(E(10).pow(e))
			let a = E(4).sub(e.log10().floor())
			return (a.lt(0)?'':m.toFixed(a))+'e'+format(e, 0)
		}
}
