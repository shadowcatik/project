# production.rb
set :rails_env, :production

# Настраиваем ssh до сервера
server "<--input production host-->", :app, :web, :db, :primary => true

# Авторизационные данные
set :user, "my-test-project"
set :group, "my-test-project"

set :keep_releases, 5
set :repository, 'prod'
