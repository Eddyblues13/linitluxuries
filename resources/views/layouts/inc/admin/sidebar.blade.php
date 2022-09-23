<nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
        <li class="nav-item">
            <a class="nav-link" href="{{url('admin/dashboard')}}">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-circle-outline menu-icon"></i>
              <span class="menu-title">Houses</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="{{url('admin/houses')}}">Add Country</a></li>
                <li class="nav-item"> <a class="nav-link" href="{{url('admin/countries')}}">Add Houses</a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="pages/forms/basic_elements.html">
              <i class="mdi mdi-view-headline menu-icon"></i>
              <span class="menu-title">Form elements</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{url('admin/cars') }}">
              <i class="mdi mdi-chart-pie menu-icon"></i>
              <span class="menu-title">Cars</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{url('admin/jewelries') }}">
              <i class="mdi mdi-grid-large menu-icon"></i>
              <span class="menu-title">Jewelry</span>
            </a>
          </li>
        </ul>
      </nav>