var element = document.getElementById('matrix');
var ctx = element.getContext('2d');
var width = document.body.clientWidth;
var height = document.body.clientHeight;

element.width = width
element.height = height

var positions = Array(300).join(0).split('')

function inicio_matrix(){
	ctx.fillStyle = 'rgba(0, 30, 1, 0.05)'
	ctx.fillRect(0, 0, width, height)
	ctx.fillStyle = '#37cc05'

	ctx.font = '11pt arial'

	positions.map(function(y, index){
		let text = String.fromCharCode(1e2 + Math.random() * 30)
		let x = (index * 15) + 15

		matrix.getContext('2d').fillText(text, x, y)

		if(y > 100 + Math.random() * 1e5){
			positions[index] = 0
		}else{
			positions[index] = y + 15
		}
	})
}

setInterval(inicio_matrix, 50)
