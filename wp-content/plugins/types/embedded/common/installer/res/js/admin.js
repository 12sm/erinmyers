    var otgs_wp_installer = {
    
    init: function(){
        
        jQuery('.otgs_wp_installer_table').on('click', '.enter_site_key_js', otgs_wp_installer.show_site_key_form);
        jQuery('.otgs_wp_installer_table').on('click', '.cancel_site_key_js', otgs_wp_installer.hide_site_key_form);
        
        jQuery('.otgs_wp_installer_table').on('click', '.remove_site_key_js', otgs_wp_installer.remove_site_key);
        jQuery('.otgs_wp_installer_table').on('click', '.update_site_key_js', otgs_wp_installer.update_site_key);
            
        jQuery('.otgs_wp_installer_table').on('submit', '.otgsi_site_key_form', otgs_wp_installer.save_site_key);
        jQuery('.otgs_wp_installer_table').on('submit', '.otgsi_downloads_form', otgs_wp_installer.download_downloads);
        jQuery('.otgs_wp_installer_table').on('change', '.otgsi_downloads_form :checkbox[name="downloads[]"]', otgs_wp_installer.update_downloads_form);
        
        jQuery('.installer-dismiss-nag').click(otgs_wp_installer.dismiss_nag);
        
        jQuery('.otgs_wp_installer_table').on('click', '.installer_expand_button', otgs_wp_installer.toggle_subpackages);

    },
    
    
    show_site_key_form: function(){
        var form = jQuery(this).parent().find('form.otgsi_site_key_form');
        jQuery(this).prev().hide();
        jQuery(this).hide();
        form.css('display', 'inline');    
        form.find('input[name^=site_key_]').focus().val('');
        form.find('input').removeAttr('disabled');        
        
        form.closest('.otgsi_register_product_wrap').addClass('otgsi_yellow_bg');
        
        return false;
    },
    
    hide_site_key_form: function(){
        var form = jQuery(this).closest('form');        
        form.hide();
        form.parent().find('.enter_site_key_js').show();
        form.parent().find('.enter_site_key_js').prev().show();
        
        form.closest('.otgsi_register_product_wrap').removeClass('otgsi_yellow_bg');
        return false;
    },
    
    save_site_key: function(){
        
        var thisf = jQuery(this);
        var data = jQuery(this).serialize();
        jQuery(this).find('input').attr('disabled', 'disabled');        
        
        var spinner = jQuery('<span class="spinner"></span>');
        spinner.css({display: 'inline-block', float: 'none'}).prependTo(jQuery(this));
        
        jQuery.ajax({url: ajaxurl, type: 'POST', dataType:'json', data: data, success: 
            function(ret){
                if(!ret.error){                    
                    otgs_wp_installer.saved_site_key();                    
                }else{
                    alert(ret.error);
                    thisf.find('input').removeAttr('disabled');        
                }
                
                if(typeof ret.debug != 'undefined'){
                    thisf.append('<textarea style="width:100%" rows="20">' + ret.debug + '</textarea>');
                }
                
                spinner.remove();
            }
        });
        
        return false;
        
    },
    
    saved_site_key: function(){
        location.reload();
    },
    
    remove_site_key: function(){
        
        if(confirm(jQuery(this).data('confirmation'))){
            
            jQuery('<span class="spinner"></span>').css({display: 'inline-block', float: 'none'}).prependTo(jQuery(this).parent());
            data = {action: 'remove_site_key', repository_id: jQuery(this).data('repository'), nonce: jQuery(this).data('nonce')}
            jQuery.ajax({url: ajaxurl, type: 'POST', data: data, success: otgs_wp_installer.removed_site_key});
        }
        
    },

    removed_site_key: function(){
        location.reload();
    },
    
    update_site_key: function(){
        
        var spinner = jQuery('<span class="spinner"></span>');
        spinner.css({display: 'inline-block', float: 'none'}).prependTo(jQuery(this).parent());
        data = {action: 'update_site_key', repository_id: jQuery(this).data('repository'), nonce: jQuery(this).data('nonce')}
        jQuery.ajax({
            url: ajaxurl, 
            type: 'POST', 
            data: data, 
            dataType: 'json', 
            success: function(ret){
                if(ret.error){
                    alert(ret.error);
                    spinner.remove();
                }
                otgs_wp_installer.updated_site_key(ret);
            }
        });
        
    },
    
    updated_site_key: function(ret){
        location.reload();            
    },
    
    update_downloads_form: function(){

        var checked = jQuery('.otgsi_downloads_form :checkbox:checked[name="downloads[]"]').length;
        
        if(checked){
            jQuery(this).closest('form').find(':submit, :checkbox[name=activate]').removeAttr('disabled');
        }else{
            jQuery(this).closest('form').find(':submit, :checkbox[name=activate]').attr('disabled', 'disabled');
        }
        
        
    },
    
    download_downloads: function(){
        
        var activate = jQuery(this).find(":checkbox:checked[name=activate]").val(),
            action_button = jQuery(this).find('input[type="submit"]');
            downloads_form = jQuery(this),
            idx = 0,
            checkboxes = [];
                
        jQuery(this).find(':checkbox:checked[name="downloads[]"]').each(function(){
            if(jQuery(this).attr('disabled')) return;
            checkboxes[idx] = jQuery(this);
            idx++;
            jQuery(this).attr('disabled', 'disabled');
        });

        idx = 0;

        if( typeof checkboxes[idx] != 'undefined' ){
            download_and_activate( checkboxes[idx] );
            action_button.attr('disabled', 'disabled');
        }

        function download_and_activate( elem ){
            
            var this_tr = elem.closest('tr');
            var is_update = this_tr.find('.installer-red-text').length;
            if(is_update){
                var installing = this_tr.find('.installer-status-updating');
                var installed = this_tr.find('.installer-status-updated');
            }else{
                var installing = this_tr.find('.installer-status-installing');
                var installed = this_tr.find('.installer-status-installed');
                
            }
            if(activate){
                var activating = this_tr.find('.installer-status-activating');
                var activated = this_tr.find('.installer-status-activated');
            }
            

            if( this_tr.find('.for_spinner_js .spinner').size() > 0 ){
                var spinner = this_tr.find('.for_spinner_js .spinner');
            }else{
                var spinner = this_tr.find('.installer-status-downloading');
            }
            
            spinner.show();
                        
            installing.show();
            
            data = {action: 'installer_download_plugin', data: elem.val(), activate: activate}
            
            jQuery.ajax({
                url: ajaxurl,
                type: 'POST',
                dataType: 'json',
                data: data,
                success: function(ret){
                    installing.hide();
                    
                    if(!ret.success){
                        installed.addClass('installer-status-error');
                        installed.html(installed.data('fail'));
                        
                        var revalidate_message = downloads_form.find('.installer-revalidate-message').html();
                        if(confirm(revalidate_message)){
                            downloads_form.closest('.otgs_wp_installer_table').find('.update_site_key_js').click();
                        }
                        
                    }
                                        
                    installed.show();
                    spinner.hide();

                    if(ret.success && activate){
                        activating.show();
                        spinner.show();
                        this_tr.find('.installer-red-text').removeClass('installer-red-text').addClass('installer-green-text').html(ret.version);
                        
                        jQuery.ajax({
                            url: ajaxurl,
                            type: 'POST',
                            dataType: 'json',
                            data: {action: 'installer_activate_plugin', plugin_id: ret.plugin_id, nonce: ret.nonce},
                            success: function(ret){
                                activating.hide();
                                if(! ret.error ){
                                    activated.show();
                                }
                                spinner.hide();

                                idx++;
                                if( typeof checkboxes[idx] != 'undefined' ){
                                    download_and_activate( checkboxes[idx] );
                                }else{
                                    downloads_form.find('div.installer-status-success').show();
                                    action_button.removeAttr('disabled');
                                }
                            }
                        });
                    }else{
                        idx++;
                        if( typeof checkboxes[idx] != 'undefined' ){
                            download_and_activate( checkboxes[idx] );
                        }else{
                             downloads_form.find('div.installer-status-success').show();
                            action_button.removeAttr('disabled');
                        }
                    }
                }
                
            });
            
        };
        
        return false;
    },
    
    dismiss_nag: function(){
        
        var thisa = jQuery(this);
        
        jQuery('<span class="spinner"></span>').css({display: 'inline-block', float: 'left'}).appendTo(thisa);
        
        data = {action: 'installer_dismiss_nag', repository: jQuery(this).data('repository')}
        
        jQuery.ajax({url: ajaxurl, type: 'POST', dataType:'json', data: data, success: 
            function(ret){
                thisa.parent().parent().remove();
            }
        });
        
        return false;

        
    },
    
    toggle_subpackages: function(){
        var list = jQuery(this).closest('td').find('.otgs_wp_installer_subtable');
        
        if(list.is(':visible')){
            list.slideUp('fast');
        }else{
            list.slideDown('fast');
        }


        return false;

    }    

    
}

jQuery(document).ready(otgs_wp_installer.init);