
require "rubygems"

Gem::Specification.new do |s|
    s.name        = "iniquity"
    s.version     = "0.0.3"
    s.summary     = "Iniquity BBS"
    s.description = "A re-imagining of the iconic BBS software."
    s.authors     = ["Dan Stephenson"]
    s.email       = "ispyhumanfly@gmail.com"
    s.files       = ["./bin/iniquity", "./lib/iniquity.rb"]
    s.require_paths = ["./examples", "./docs"]
    s.executables << "iniquity"
    s.homepage    = "https://iniquitybbs.github.io"
    s.metadata = { "issue_tracker" => "https://github.com/iniquitybbs/iniquity/issues" }
    s.license     = "MIT"
end