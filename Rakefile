require 'rubygems'
require 'tmpdir'
require 'jekyll'
require 'bundler/setup'


# Change your GitHub reponame
GITHUB_REPONAME = "bossiernesto/uqbar-jekyll-proposal"
DEST_BRANCH = "gh-pages"
SOURCE_BRANCH = "master"

desc "Generate blog files"
task :generate do
  Jekyll::Site.new(Jekyll.configuration({
                                            "source" => ".",
                                            "destination" => "_site"
                                        })).process
end

desc "Generate and publish blog to gh-pages"
task :publish => [:generate] do
  Dir.mktmpdir do |tmp|
    puts "Created temporal directory #{tmp}"

    cp_r "_site/.", tmp

    pwd = Dir.pwd
    Dir.chdir tmp

    system "git init"

    #Create CNAME File
    #system "echo uqbar-project.org > CNAME"

    system "git add ."
    message = "Site updated at #{Time.now}"
    system "git commit -m #{message.inspect}"
    system "git remote add origin git@github.com:#{GITHUB_REPONAME}.git"
    puts "Pushing to origin #{DEST_BRANCH}"
    system "git push -f origin #{SOURCE_BRANCH}:#{DEST_BRANCH}"

    Dir.chdir pwd
  end
end
