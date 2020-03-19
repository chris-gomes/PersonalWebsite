deploy:
	cp -r agecalculator toDeploy/agecalculator
	cp -r countdown toDeploy/countdown
	cp -r imgs toDeploy/imgs
	cp -r sections toDeploy/sections
	cp index.html toDeploy/index.html
	cp styles.css toDeploy/styles.css

	firebase deploy

.PHONY: clean
clean:
	rm -r toDeploy/agecalculator
	rm -r toDeploy/countdown
	rm -r toDeploy/imgs
	rm -r toDeploy/sections
	rm toDeploy/index.html
	rm toDeploy/styles.css