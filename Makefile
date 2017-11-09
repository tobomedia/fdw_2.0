.PHONY: all scrape resizeLandscape resize clean move

all: | clean scrape resizeLandscape resize move

scrape:
	@echo Scraping...
	casperjs --username=${username} --password=${password} scraper.js

resizeLandscape:
	@echo Cropping...
	identify -format '%w %h %i\n' actor_images/*.jpg | awk '$$1=="540" && $$2!="540" {sub(/^[^ ]* [^ ]* /, ""); print}' | tr '\n' '\0' | xargs -0 mogrify -crop 300x300+120+0

resize:
	 mogrify -resize 300 -crop 300x300+0+20 actor_images/*.jpg
	@echo Complete.

move:
	@echo Copying unlisted...
	cp -rv unlisted/* actor_images
	@echo Completed.

clean:
	@echo Cleaning...
	rm -r actor_images/*
