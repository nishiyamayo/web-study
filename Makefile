.PHONY: all
all: help

GCP_PROJECT_ID = your-app-id

.PHONY: front-build ## build front app
front-build:
	gcloud builds submit ./front --project $(GCP_PROJECT_ID) --tag asia.gcr.io/$(GCP_PROJECT_ID)/web-study/front

.PHONY: front-deploy ## deploy front app to cloud run
front-deploy:
	gcloud beta run deploy web-study-front --project $(GCP_PROJECT_ID) --image asia.gcr.io/$(GCP_PROJECT_ID)/web-study/front --allow-unauthenticated

.PHONY: help ## View help
help:
	@grep -E '^.PHONY: [a-zA-Z_-]+.*?## .*$$' $(MAKEFILE_LIST) | sed 's/^.PHONY: //g' | awk 'BEGIN {FS = "## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
