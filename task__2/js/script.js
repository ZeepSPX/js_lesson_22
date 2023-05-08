// Задача 3.Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів. ---------------------------------------------------------------------------------

class InputError extends Error { }

function validateMonth(month) {
	const monthNum = parseInt(month)
	if (isNaN(monthNum) || month < 1 || month > 12) {
		throw new InputError('Номер місяця повинен знаходиться між 1 та 12')
	}
	if (monthNum === 7 || monthNum === 8) {
		throw new InputError('Літні канікули')
	}
	return monthNum
}

function validateGrade(grade) {
	const gradeNum = parseInt(grade)
	if (isNaN(gradeNum) || gradeNum < 1 || gradeNum > 100) {
		throw new InputError('Оцінка повинна бути між 1 і 100')
	}
	return gradeNum
}

function canImproveGrade(month, grade) {
	const monthNum = validateMonth(month)
	const gradeNum = validateGrade(grade)

	if (monthNum === 12) {
		return false
	}

	if (gradeNum >= 60) {
		return false
	}

	return true
}


const monthInput = document.getElementById('month-input')
const gradeInput = document.getElementById('grade-input')
const submitBtn = document.getElementById('submit-bth')
const result = document.getElementById('result')

submitBtn.addEventListener('click', () => {
	try {
		const month = monthInput.value;
		const grade = gradeInput.value;
		const canImprove = canImproveGrade(month, grade);
		if (canImprove) {
			result.textContent = 'Ви можете покращити свою оцінку';
		} else {
			result.textContent = 'Ви не можете покращити свою оцінку';
		}
	} catch (error) {
		if (error instanceof InputError) {
			result.textContent = error.message;
		} else {
			console.error(error)
			result.textContent = 'Сталася неочікувана помилка'
		}
	}
})






