deploy:
	xcopy agecalculator toDeploy\agecalculator /i /y
	xcopy countdown toDeploy\countdown /i /y
	xcopy imgs toDeploy\imgs /i /y
	xcopy sections toDeploy\sections /i /y
	copy index.html toDeploy\index.html /y
	copy styles.css toDeploy\styles.css /y

	firebase deploy