const exercises = [
	{
		name: "pushups",
		sets: 1,
		reps: 10,
		options: [
			{ type: "normal" },
			{ type: "wide" },
			{ type: "close" },
			{ type: "diamond" },
		],
	},
	{
		name: "sprints",
		sets: 5,
		reps: 1,
		options: [
			{ distance: "10m", reps: 2 },
			{ distance: "20m" }
		],
	},
	{
		name: "lunges",
		sets: 1,
		reps: 10,
	},
	{
		name: "squats",
		sets: 1,
		reps: 10,
	},
	{
		name: "jumps",
		sets: 1,
		reps: 10,
		options: [
			{ type: "knees to chest" },
			{ type: "box jump" },
		],
	},
	{
		name: "burpees",
		sets: 1,
		reps: 7,
	},
	{
		name: "kettlebell swings",
		sets: 1,
		reps: 14,
		options: [
			{ type: "normal" },
			{ type: "one-handed" },
		],
	},
	{
		name: "kettlebell presses",
		sets: 2,
		reps: 10,
	},
	{
		name: "kettlebell holds",
		sets: 2,
		reps: 1,
		options: [
			{ duration: "20s", weight: "light" },
			{ duration: "10s", weight: "heavy" },
		],
	},
	{
		name: "kettlebell snatches",
		sets: 2,
		reps: 10,
		options: [
			{ weight: "light" },
			{ weight: "heavy", reps: 5 },
		],
	},
]

const newExerciseButton = document.querySelector(`[data-push="changeExercise"]`)
// const addExerciseButton = document.querySelector(`[data-push="addExercise"]`)
// const addExerciseField = document.querySelector(`[data-value="addExercise"]`)

newExerciseButton.addEventListener("click", pickExercise)

function pickExercise() {
	// Find the current exercise index in the array
	// const currentExerciseName = exercisePrintEls.innerText.toLowerCase() || null
	// const newExercises = exercises.filter((excercise) => excercise.name.toLowerCase() !== currentExerciseName)
	// const newExercise = newExercises[randomNumber(newExercises.length)].name

	const printElGroups = document.querySelectorAll(`[data-group]`)
	printElGroups.forEach((group) => {
		const exercisePrintEls = group.querySelectorAll(`[data-exercise]`)
		let selectedExercise = randomNumber(exercises.length)
		exercisePrintEls.forEach((el) => {
			let dataValue = el.dataset.exercise
			if (dataValue === "options") {
				let exerciseOptions
				exerciseOptions = exercises[selectedExercise][dataValue] || Array.isArray(exerciseOptions) // exerciseOptions is either an array of objects or false

				// If exerciseOptions is not false, then select a random object from the array, otherwise print N/A
				let optionsToPrint
				if (exerciseOptions === false) {
					optionsToPrint = "N/A"
				}
				else {
					const selectedExerciseOption = exerciseOptions[randomNumber(exerciseOptions.length)]
					optionsToPrint = JSON.stringify(selectedExerciseOption)
				}
				el.innerText = optionsToPrint


				// check if the array contains reps
				// if (options.indexOf("reps") > -1) { // TODO: doesn't work because we need to look inside the object to see if it has reps
				//	el.innerText = `We have reps`
				// }

				// Pick a random option from the array


				// Iterate though the object and print each value
				// }
				// else {
				// 	// print all options
				// 	el.innerText = `N/A`
				// }
			}
			else {
				el.innerText = exercises[selectedExercise][dataValue]
			}
		})
	})
}

function randomNumber(maxNum) {
	return Math.floor(Math.random() * maxNum)
}

// addExerciseButton.addEventListener("click", (ev) => addExercise(ev))

/* function addExercise(ev) {
	ev.preventDefault()
	const newExercise = addExerciseField.value.toLowerCase()
	if (exercises.indexOf(newExercise) === -1) {
		exercises.push(newExercise)
	}
	addExerciseField.value = ""
}
 */
// const randomNumber = (maxNum) => Math.floor(Math.random() * maxNum)