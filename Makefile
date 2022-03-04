.PHONY: all docker serve clean

all: clean install serve

clean:
	rm -f Gemfile.lock

serve:
	bundle exec jekyll serve --host 0.0.0.0 --baseurl /test-base

install: clean
	bundle install

docker:
	docker compose up --build

