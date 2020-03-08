// 获取当前的时间 默认格式2020-2-19 21:34:45
export function getYearMInthDay(
	symbolExpressYear = "-",
	symbolExpressMonth = "-",
	symbolExpressDay = "-",
	symbolExpress = ":"
) {
	let date = new Date();
	let yearTime = date.getFullYear(); // 获取完整的年份(4位,1970)
	let MonthTime = date.getMonth() + 1; // 获取月份(0-11,0代表1月,用的时候记得加上1)
	let dayTime = date.getDate(); // 获取日(1-31)

	let HoverTIme = date.getHours(); // 获取小时数(0-23)
	let MinyutesTime = date.getMinutes(); // 获取分钟数(0-59)
	let secondsTime = date.getSeconds(); // 获取秒(0-59)

	return (
		yearTime +
		symbolExpressYear +
		MonthTime +
		symbolExpressMonth +
		dayTime +
		" " +
		HoverTIme +
		symbolExpress +
		MinyutesTime +
		symbolExpress +
		secondsTime
  );
}

// 实时跟新时间
export function gwtRealTIme() {
  //   return getYearMInthDay();
}
