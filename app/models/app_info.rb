class AppInfo
  def self.app_name
    Rails.application.class.to_s.split("::").first
  end

  def self.rails_version
    Rails.version
  end
end