deploy:
	xcopy agecalculator toDeploy\agecalculator /i /y /s
	xcopy countdown toDeploy\countdown /i /y /s
	xcopy imgs toDeploy\imgs /i /y /s
	xcopy sections toDeploy\sections /i /y /s
	copy index.html toDeploy\index.html /y
	copy styles.css toDeploy\styles.css /y

	firebase deploy

.PHONY: clean
clean:
	rd toDeploy\agecalculator /q /s
	rd toDeploy\countdown /q /s
	rd toDeploy\imgs /q /s
	rd toDeploy\sections /q /s
	del toDeploy\index.html /q
	del toDeploy\styles.css /q