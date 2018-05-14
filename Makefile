.PHONY: all scrape resizeLandscape resize clean move

all: | clean scrape resizeLandscape move

scrape:
	@echo Scraping...
	casperjs --username=${username} --password=${password} scraper.js

resizeLandscape:
	@echo Cropping...
	node resizencrop.js

move:
	@echo Copying unlisted...
	cp -rv unlisted/* actor_images
	cp -rv actor_images assets
	cp -rv actor_images mobile/assets
	cp actors_a_k.xml mobile/assets
	cp actors_l_z.xml mobile/assets
	cp actresses_a_k.xml mobile/assets
	cp actresses_l_z.xml mobile/assets
	cp actors_a_k.xml assets
	cp actors_l_z.xml assets
	cp actresses_a_k.xml assets
	cp actresses_l_z.xml assets
	@echo Completed.

clean:
	@echo Cleaning...
	rm -r actor_images/*
	rm -r assets/actor_images/*
	rm -r mobile/assets/actor_images/*
