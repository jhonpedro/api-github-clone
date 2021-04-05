class Methods {
	methodOne(numberOfOcurrences, Ocorrence) {
		if (numberOfOcurrences === 0) {
			return []
		}

		const arr = []

		for (let i = 0; i < numberOfOcurrences; i++) {
			arr.push(Ocorrence)
		}

		return arr
		// return new Array(numberOfOcurrences).fill(Ocorrence)
	}
	methodTwo(arr) {
		const arrToReturn = []

		for (let i = arr.length - 1; i >= 0; i--) {
			arrToReturn.push(arr[i])
		}

		return arrToReturn
		// return arr.reverse()
	}
	methodThree(arr) {
		const arrToReturn = []

		for (let i = 0; i < arr.length; i++) {
			if (arr[i]) {
				arrToReturn.push(arr[i])
			}
		}

		return arrToReturn
		// return arr.filter((elem) => {if(elem){return elem}})
	}
	methodFour(arr) {
		let obj = {}

		for (let i = 0; i < arr.length; i++) {
			obj = {
				...obj,
				[arr[i][0]]: arr[i][1],
			}
		}

		return obj
		// return arr.reduce((acc, currentValue) => ({ ...acc, [currentValue[0]]: currentValue[1] }),{})
	}
	methodFive(arr, ...rest) {
		const arrToReturn = []

		for (let i = 0; i < arr.length; i++) {
			let flag = false
			for (let u = 0; u < rest.length; u++) {
				if (arr[i] === rest[u]) {
					flag = true
					break
				}
			}
			if (flag) {
				continue
			}

			arrToReturn.push(arr[i])
		}

		return arrToReturn
	}
	methodSix(arr) {
		const arrToReturn = []

		for (let i = 0; i < arr.length; i++) {
			if (!arrToReturn.includes(arr[i])) {
				arrToReturn.push(arr[i])
			}
		}

		return arrToReturn
	}
	methodSeven(arr, arrToCompare) {
		if (arr.length != arrToCompare.length) {
			return false
		}

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] instanceof Array && arrToCompare[i] instanceof Array) {
				return this.methodSeven(arr[i], arrToCompare[i])
			}
			if (arr[i] !== arrToCompare[i]) {
				return false
			}
		}

		return true
	}
	methodEight(arr) {
		const arrToReturn = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] instanceof Array) {
				arrToReturn.push(...this.methodEight(arr[i]))
				continue
			}
			arrToReturn.push(arr[i])
		}

		return arrToReturn
		// return arr.flat()
		// experimental!
	}
	methodNine(arr, gap) {
		const arrToReturn = []

		if (gap < 0) {
			return []
		}

		if (gap === 0) {
			return arr
		}

		let gapFlag = 0
		let arrHelper = []
		for (let i = 0; i < arr.length; i++) {
			if (gapFlag === gap) {
				gapFlag = 0
				arrToReturn.push(arrHelper)
				arrHelper = []
			}
			gapFlag++
			arrHelper.push(arr[i])

			if (i == arr.length - 1) {
				arrToReturn.push(arrHelper)
			}
		}
		return arrToReturn
	}
	methodTen(arr, arrFindCommon) {
		const arrWithCommonElements = []

		for (let i = 0; i < arrFindCommon.length; i++) {
			if (arrWithCommonElements.includes(arrFindCommon[i])) {
				continue
			}

			if (arr.includes(arrFindCommon[i])) {
				arrWithCommonElements.push(arrFindCommon[i])
			}
		}

		return arrWithCommonElements
	}
}

const methods = new Methods()

console.log(methods.methodOne(10, 'c'))
console.log(methods.methodTwo([1, 2, 3, 4, 5, { nome: 'Cleon' }]))
console.log(methods.methodThree([1, '', 3, null, 4, 0, undefined, 0, 10]))
console.log(
	methods.methodFour([
		['a', 1],
		['b', 2],
		['nome', 'cleon', 'um', 'dois'],
	])
)
console.log(
	methods.methodFive(
		[4, 1, 2, 3, 5, 1, 1, 2, 11, 'um'],
		'um',
		10,
		5,
		2,
		3,
		1,
		4
	)
)
console.log(methods.methodSix([10, 3, 1, 2, 3, 4, 2, 3, 4, 10]))
console.log(
	methods.methodSeven([1, 2, [3, 3, [3, 4]], 3], [1, 2, [3, 3, [3, 4]], 3])
)
console.log(methods.methodEight([1, 2, [3, 4, [5, 6, [7, 8]]]]))
console.log(methods.methodNine([1, 2, 3, 4], 3))
console.log(methods.methodTen([1, 1, 2, 3, 1, 4, 5, 6], [1, 2, 6, 6]))
